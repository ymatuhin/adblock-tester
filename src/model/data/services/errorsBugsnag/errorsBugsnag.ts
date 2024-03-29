import sizes from "../../sizes.json";
import urls from "../../sizesUrls";
import errorsBugsnagHtml from "./html";

export const errorsBugsnag = {
  id: "errors:bugsnag",
  titleKey: "sections.errorCatchers.bugsnag",
  visible: true,
  prevVisible: true,
  active: true,
  checks: [
    {
      id: "errors:bugsnag:script",
      type: "script",
      status: "pending",
      url: urls.errorsBugsnag,
      approxSize: sizes[urls.errorsBugsnag],
    },
    {
      id: "errors:bugsnag:eval",
      type: "eval",
      include: errorsBugsnagHtml,
      evals: ["window.bugsnag"],
      depends: "errors:bugsnag:script",
      status: "pending",
    },
  ],
};
