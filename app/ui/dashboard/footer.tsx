import React from "react";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { i18n, t } = useTranslation();
  return (
    <div className="flex justify-between items-center m-4">
      <div>{t("title")}</div>
      <div className="flex justify-between items-center gap-4">
          <div>{t("License More")}</div>
          <div> {t("Themes Documentation")}</div>
          <div>{t("Support")}</div>
      </div>
    </div>
  );
}
