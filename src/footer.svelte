<script>
  import { version } from "../package.json";
  import { t } from "./i18n";
</script>

<footer>
  {t("page.title")} <small>({t("page.version")}&nbsp;{version})</small>
  <br />
  {@html t("page.footerQuestion")}
  ym@ymatuhin.ru
</footer>

<p class="keywords">
  <small>{t("page.keywords")}</small>
</p>

<style>
  footer {
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
  }

  .title {
    display: flex;
    align-items: center;
    margin-top: 2em;
    margin-bottom: 1.5em;
  }
  @media (min-width: 768px) {
    .title {
      flex-wrap: wrap;
      margin-top: 1.5em;
    }
  }
  .title h1 {
    margin: 0;
    margin-right: 0.25em;
    line-height: 1;
  }
  .title .small {
    display: inline-block;
    padding-top: 0.5em;
  }

  .keywords {
    margin-bottom: 0;
  }

  .title svg,
  .title img {
    flex-shrink: 0;
    margin-right: 0.25em;
    height: 2.5em;
    font-size: 2.5em;
    transform: translateY(-5%);
  }
  @media (max-width: 768px) {
    .title svg,
    .title img {
      height: 2em;
      font-size: 2em;
    }
  }

  .small {
    color: var(--text-color);
    white-space: nowrap;
    font-weight: normal;
    font-size: 1rem;
    opacity: 0.35;
    transition: color var(--speed-quick) ease;
  }
</style>
