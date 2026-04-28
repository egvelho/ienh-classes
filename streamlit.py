datasource db {
  provider = "postgresql" // Ou "sqlite" para poupar RAM no Chromebook
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// --- Autenticação e Atores ---

enum Role {
  ALUNO
  PROFESSOR
  ADMIN
}

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  passwordHash  String
  name          String
  role          Role      @default(ALUNO)
  
  // Recuperação de senha (envio de email)
  resetToken    String?   @unique
  resetExpires  DateTime?

  // Relações para Professor
  turmasDocente Turma[]   @relation("ProfessorResponsavel")
  
  // Relações para Aluno
  matriculas    Matricula[]
  presencas     Presenca[]

  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

// --- Gestão de Turmas ---

model Turma {
  id          String   @id @default(cuid())
  nome        String
  horario     String
  fotoUrl     String?
  
  professorId String
  professor   User     @relation("ProfessorResponsavel", fields: [professorId], references: [id])
  
  alunos      Matricula[]
  aulas       Aula[]

  createdAt   DateTime @default(now())
}

// Tabela de ligação Aluno <-> Turma (Muitos para Muitos)
model Matricula {
  alunoId String
  turmaId String
  aluno   User   @relation(fields: [alunoId], references: [id])
  turma   Turma  @relation(fields: [turmaId], references: [id])

  @@id([alunoId, turmaId])
}

// --- Presença e QR Code ---

model Aula {
  id         String   @id @default(cuid())
  data       DateTime @default(now())
  turmaId    String
  turma      Turma    @relation(fields: [turmaId], references: [id])
  
  // QR Code: O professor gera um hash temporário para esta aula
  qrCodeHash String   @unique 
  
  presencas  Presenca[]
}

model Presenca {
  id        String   @id @default(cuid())
  aulaId    String
  alunoId   String
  aula      Aula     @relation(fields: [aulaId], references: [id])
  aluno     User     @relation(fields: [alunoId], references: [id])
  dataHora  DateTime @default(now())

  @@unique([aulaId, alunoId]) // Impede assinatura duplicada
}