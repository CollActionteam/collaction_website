import Image from 'next/image';

import GoalImg from 'public/home/goal.png';
import CrowdImg from 'public/home/crowd.png';
import ActionImg from 'public/home/action.png';

import clsx from 'clsx';

export enum Step {
  GOAL = 0,
  CROWD = 1,
  ACTION = 2,
}

export interface ExplanationProps {
  step: Step;
  title: JSX.Element;
  description: string;
}

export default function CollActionExplanation(props: ExplanationProps) {
  const STEP_TO_IMG = {
    0: GoalImg,
    1: CrowdImg,
    2: ActionImg,
  };

  const STEP_TO_EXPL = {
    0: 'Goal',
    1: 'Crowd',
    2: 'Action',
  };

  return (
    <div className="px-7 text-center align-middle max-w-[325px] max-h[325px] py-4">
      {props.title}

      <Image
        src={STEP_TO_IMG[props.step]}
        alt={STEP_TO_EXPL[props.step]}
        className="mx-auto py-6"
        height={150}
      />

      <p className={clsx('text-body-long-1 mb-3', 'text-primary-200')}>
        {props.description}
      </p>
    </div>
  );
}
