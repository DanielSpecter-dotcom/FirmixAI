import { useState } from 'react';

const QUESTIONS_ANSWERS = {
  1: { correct: 'B', explanation: 'La cláusula "previa conformidad del propietario" es una trampa legal frecuente. El propietario puede alegar daños inexistentes para retener tu dinero indefinidamente. Firmix IA detecta este patrón automáticamente.' },
  2: { correct: 'A', explanation: 'El contrato escrito tiene primacía. Si el contrato dice efectivo y pagas digital, el propietario podría argumentar incumplimiento. Siempre modifica el contrato o añade una adenda firmada por ambas partes.' },
  3: { correct: 'A', explanation: 'La Ley 30933 permite un proceso de desalojo express. Si firmaste esta cláusula y te atrasas 2+ meses, el propietario puede desalojarte en días con apoyo notarial y policial.' },
};

/**
 * Hook que centraliza el estado y la lógica del ContractQuiz.
 */
export function useContractQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [leadName, setLeadName]   = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadGoal, setLeadGoal]   = useState('');

  const startQuiz = () => {
    if (!leadName.trim() || !leadEmail.trim() || !leadGoal) return;
    setStep(1);
  };

  const selectOption = (questionNum, option) => {
    if (answers[questionNum]) return; // ya respondida
    const qa = QUESTIONS_ANSWERS[questionNum];
    const isCorrect = option === qa.correct;

    setAnswers(prev => ({ ...prev, [questionNum]: option }));
    setCurrentFeedback({ correct: isCorrect, explanation: qa.explanation });
    if (isCorrect) setQuizScore(s => s + 1);
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setCurrentFeedback(null);
    setStep(s => s + 1);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setShowFeedback(false);
    setCurrentFeedback(null);
    setQuizScore(0);
    setLeadName('');
    setLeadEmail('');
    setLeadGoal('');
  };

  return {
    step, answers, leadName, leadEmail, leadGoal, quizScore,
    setLeadName, setLeadEmail, setLeadGoal,
    startQuiz, selectOption, nextQuestion, resetQuiz,
    currentFeedback, showFeedback,
  };
}
