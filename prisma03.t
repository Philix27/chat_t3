generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}


model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?
  user              Member  @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         Member   @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Member {
  id              String           @id @default(cuid())
  firstname       String
  lastname        String
  maritalStatus   String
  madienName      String
  nationality     String
  membershipRegNo String
  address         String
  phone1          String
  phone2          String
  email           String?          @unique
  stateId         String
  lgaId           String
  wardId          String
  pollingUnitId   String
  nin             String
  dob             DateTime
  gender          DateTime
  emailVerified   DateTime?
  image           String?
  createdAt       DateTime         @default(now())
  updatedAt       DateTime         @updatedAt
  accounts        Account[]
  dues            Dues[]           @relation("Dues")
  lga             Lga              @relation("Lga_Member", fields: [lgaId], references: [id])
  pollingUnit     PollingUnit      @relation("PollingUnit_Member", fields: [pollingUnitId], references: [id])
  state           State            @relation("State_Member", fields: [stateId], references: [id])
  ward            Ward             @relation("Ward_Member", fields: [wardId], references: [id])
  sessions        Session[]
  nominationForm  NominationForm[] @relation("CandidateForm")
  formNominated   NominationForm[] @relation("FormNominated")

  @@unique([email, id])
  @@index([email])
}

model Dues {
  id       String       @id @default(cuid())
  type     PaymentTypes
  datePaid DateTime
  userId   String
  member   Member       @relation("Dues", fields: [userId], references: [id])
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}

model State {
  id      String   @id @default(cuid())
  name    String   @unique
  capital String
  code    String @unique
  roomId    String? @unique
  members Member[] @relation("State_Member")
  lgas Lga[] @relation("State")
}

model Lga {
  id      String   @id @default(cuid())
  name    String
  code    String
  roomId    String
  members Member[] @relation("Lga_Member")
  state State            @relation("State", fields: [stateId], references: [id])
  stateId String
  wards Ward[] @relation("Lga")
}

model Ward {
  id      String   @id @default(cuid())
  name    String
  code    String
  roomId    String @unique
  members Member[] @relation("Ward_Member")
  lgaId String
  lga  Lga            @relation("Lga", fields: [lgaId], references: [id])
  pollingUnits PollingUnit[] @relation("PollingUnit")
}

model PollingUnit {
  id      String   @id @default(cuid())
  name    String
  code    String
  roomId    String? @unique
  members Member[] @relation("PollingUnit_Member")
  wardId String
  ward Ward  @relation("PollingUnit", fields: [wardId], references: [id])
}

model Institution {
  id                   String @id @default(cuid())
  institutionsAttended String
}

model NominationForm {
  id                              String   @id @default(cuid())
  dateSigned                      DateTime
  dateApproved                    DateTime
  position                        Position @default(HOSUE_OF_REP)
  institution                     String[]
  workExperience                  Json
  politicalHistory                String
  politicalAppointment            String?
  otherUsefulInfo                 String?
  pendingCriminalTrial            Boolean
  pendingCriminalActReason        String?
  everBeenLunatic                 Boolean
  everBeenLunaticReason           String?
  everBeenConvicted               Boolean
  everBeenConvictedReason         String?
  everBeenDeclearedBankrupt       Boolean
  everBeenDeclearedBankruptReason String?
  member                          Member[] @relation("CandidateForm")
  nominatedBy                     Member[] @relation("FormNominated")

  @@index([dateApproved, dateSigned])
}

enum PaymentTypes {
  MONTHLY_DUES
}

enum Position {
  PRESIDENTIAL
  SENATORIAL
  GUBERNATORIAL
  HOSUE_OF_REP
}
