import sizes from "../../sizes.json";
import urls from "../../sizesUrls";
import { ruHtml, enHtml } from "./html";

export const metricaGoogle = {
  id: "metrica:google",
  titleKey: "sections.analytics.google",
  visible: true,
  prevVisible: true,
  active: true,
  checks: [
    {
      id: "metrica:google:script",
      type: "script",
      url: urls.metricaGoogle,
      approxSize: sizes[urls.metricaGoogle],
      status: "pending",
    },
    {
      id: "metrica:google:eval",
      type: "eval",
      include: process.env.LANG === "ru" ? ruHtml : enHtml,
      evals: ["ga.answer"],
      depends: "metrica:google:script",
      status: "pending",
    },
  ],
};