import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// 1. ADMISSIONS: Register a new student
app.post('/register-student', async (req, res) => {
  const { name, parentPhone, schoolId, grade } = req.body;
  try {
    const student = await prisma.student.create({
      data: {
        firstName: name,
        lastName: "Student",
        parentPhone: parentPhone,
        gradeLevel: grade,
        schoolId: schoolId,
        birthDate: new Date(), // Placeholder
      }
    });
    res.json({ message: "Student Registered Successfully", student });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
});

// 2. FINANCE: Verify a Telebirr Payment
app.post('/verify-payment', async (req, res) => {
  const { amount, transactionRef, studentId } = req.body;
  // Here we would normally call the Chapa/Telebirr API
  const payment = await prisma.payment.create({
    data: {
      amount,
      transactionRef,
      studentId,
      paymentMethod: "Telebirr",
      status: "SUCCESS"
    }
  });
  res.json({ status: "Payment Confirmed", payment });
});

app.listen(3000, () => console.log("Fema SMS Master Engine running on port 3000"));
