import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default async function collactionTranslations(
  initialLocale: string,
  namespacesRequired?: string[]
): Promise<SSRConfig> {
  return serverSideTranslations(initialLocale, [
    'app',
    'common',
    ...(namespacesRequired ?? []),
  ]);
}