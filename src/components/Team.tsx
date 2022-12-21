import React, { ReactNode } from 'react';
import clsx from 'clsx';

import Avatar from './Avatar';
import new_team from '../data/new_team.json';

interface TeamProps {
  name: string | 'new' | 'old';
  title: string;
  description?: string | ReactNode;
  background?: string;
  full_name: string;
}

interface IMember {
  name: string;
  full_name: string;
  photo: string;
  linkedin_github?: string;
  role?: string;
  country?: string;
}

export default function Teams(props: TeamProps) {
  const team_members = new_team.members.map((member: IMember) => {
    const prefix = '/teams/' + 'new' + '/';
    return (
      <Avatar
        key={member.name}
        src={prefix + member.photo}
        alt={member.full_name}
        linkedin_github={member.linkedin_github}
        role={member.role}
        country={member.country}
      />
    );
  });

  {
    /** 
  if (props.name === "old") {
    team_members = old_team.members.map((member: IMember) => {
      let prefix = "/teams/" + props.name + "/";
      return (
        <Avatar key={member.name} 
          src={prefix + member.photo} 
          alt={member.name} 
          />
      );
    });
   
  }
  */
  }

  return (
    <section className={clsx('px-5', 'py-1', props.background || '')}>
      <div
        className={clsx(
          // 'pb-10',
          // 'pb-12' && props.name === 'old',
          'text-center'
        )}
      >
        <h1
          className={clsx(
            'text-collaction',
            'text-2xl',
            'font-medium',
            props.description && 'mb-4'
          )}
        >
          {props.title}
        </h1>
        {props.description && <p>{props.description}</p>}
      </div>

      <div className="flex lg:w-[744px] p-0 gap-x-auto mx-auto w-auto p-auto">
        <div className="flex flex-wrap justify-center items-center">
          {team_members.map(function (object, i) {
            return (
              <div
                className=" flex justify-center items-center w-1/2 md:w-1/3 lg:w-1/4"
                key={i}
              >
                {' '}
                {object}{' '}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
