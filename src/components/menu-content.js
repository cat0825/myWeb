import React from 'react';
import Link from 'next/link';

import { NavigationLink } from '@/components/navigation-link';
import { PROFILES, LINKS } from '@/lib/constants';

export const MenuContent = () => {
  return (
    <div className="flex w-full flex-col text-sm">
      <div className="flex flex-col gap-4">
        <Link href="/" className="link-card inline-flex items-center gap-2 p-2">
          <img
            src="/assets/me.jpg"
            alt="Profile"
            width={40}
            height={40}
            loading="lazy"
            className="rounded-full border shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight">千羽鶴</span>
            <span className="text-gray-600">student,ISTJ,にじげん,一只猫,M,精神病患者,偏执,Machine learning trainee</span>
          </div>
        </Link>
        <div className="flex flex-col gap-1">
          {LINKS.map((link, index) => (
            <NavigationLink
              key={index}
              href={link.href}
              label={link.label}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 text-sm">
        <span className="px-2 text-xs font-medium leading-relaxed text-gray-600">Online</span>
        <div className="flex flex-col gap-1">
          {Object.entries(PROFILES).map(([key, profile]) => (
            <NavigationLink
              key={key}
              href={profile.url}
              label={profile.title}
              icon={profile.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
