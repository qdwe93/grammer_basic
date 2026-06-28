import { Legend } from "../../components/Legend";
import type { Question } from "../../data/schema";
import type { AnswerState } from "./useQuizState";
import { ComponentBracket } from "./ComponentBracket";
import { TranslationCallout } from "./TranslationCallout";
import styles from "./RevealPanel.module.css";

export interface RevealPanelProps {
  question: Question;
  answer: AnswerState;
}

export function RevealPanel({ question, answer }: RevealPanelProps) {
  return (
    <div className={styles.panel}>
      <div className={styles.sentence} lang="en">
        {question.phrases.map((phrase) => (
          <ComponentBracket
            key={phrase.id}
            question={question}
            phrase={phrase}
            everWrongTokenIndexes={answer.everWrongTokenIndexes}
            wasWrongPhrase={answer.everWrongPhraseIds.has(phrase.id)}
          />
        ))}
      </div>

      <TranslationCallout translation={question.translation} />
      <Legend />
    </div>
  );
}
