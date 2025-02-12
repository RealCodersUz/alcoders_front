import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="d-flex flex-row justify-content-center g-4 align-item-center">
      <div className="container mt-5 w-75 my-5">
        <h1>{t("welcome")}</h1>
        <h4>Shiorimiz: Innavatsion fikrlang o'zingizni qiynamang !</h4>
        <h5>Biznesingizni biz bilan avtomatlashtirish osson va qulay !</h5>
      </div>
      <img
        src="https://media.istockphoto.com/id/2172009089/photo/businessman-working-on-financial-report-of-corporate-operations-balance.jpg?s=1024x1024&w=is&k=20&c=MesDTE_f_ee4pvpFrbWQ_ZIeE1fFN4CGDgjALTmFV0Q="
        alt="hero"
        width="800px"
      />
    </section>
  );
};

export default Home;
