import Card from "../../components/Card";
import "./index.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="d-flex flex-row justify-content-center g-4 align-item-center py-5">
        <div className="container mt-5 w-75 my-5">
          <h3>{t("welcome")}</h3>
          <h2 className="my-5 fs-1">{t("slogan")}</h2>
          <h5>{t("subtitle")}</h5>
        </div>
        <img src="/hero.jpg" alt="hero" width="800px" />
      </section>
      <section>
        {/* <div className="container mt-5 w-75 my-5">
          {/* <h3>{t("about")}</h3> 
          <h3
            className="text-center"
            style={{ fontSize: "5rem", fontWeight: "bold" }}
          >
            We empower you to succeed in the digital world
          </h3>

          <p className="text-center text-secondary fs-5 p-5">
            Alcoders is an IT company that provides its clients with a variety
            of IT services. We talk to each client individually, explaining what
            they want and need to do, and what we can offer. And we create
            projects based on the needs and wishes of our clients. The main
            thing for us is to digitize your business or work and provide you
            with the most profitable projects you want.
          </p>
        </div> */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: "-1",
            }}
          >
            <source src="/backvid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: "-1",
            }}
          ></div>

          <div style={{ position: "relative", zIndex: "1", maxWidth: "800px" }}>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold", margin: "0" }}>
              We empower you to succeed in the digital world
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                marginBottom: "20px",
                paddingTop: "4rem",
              }}
            >
              Alcoders is an IT company that provides its clients with a variety
              of IT services. We talk to each client individually, explaining
              what they want and need to do, and what we can offer. And we
              create projects based on the needs and wishes of our clients. The
              main thing for us is to digitize your business or work and provide
              you with the most profitable projects you want.
            </p>

            {/* <div style={{ marginTop: "20px" }}>
              <img
                src="/service.jpg"
                alt="About Us"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  borderRadius: "10px",
                }}
              />
            </div> */}
          </div>
        </div>
      </section>
      <section>
        <div className="container pt-5 w-100 ">
          {/* <h3 className="text-center">{t("services")}</h3> */}
          <h3 className="text-center pb-5">Bizning Xizmatlar</h3>
          <div className="d-flex flex flex-row flex-wrap gap-5">
            <Card
              id="1"
              url="/pexels-fotios-photos-2363482.jpg"
              title="Web Sites (Korporative)"
              subtitle="Alcoders is an IT company that provides its clients with a variety
            of IT services. We talk to each client individually, explaining what
            they want and need to do, and what we can offer."
            />
            <Card
              id={`${1}`}
              url="/public/pexels-fotios-photos-2363482.jpg"
              title="Building CRM systems"
              subtitle="Alcoders is an IT company that provides its clients with a variety
            of IT services. We talk to each client individually, explaining what
            they want and need to do, and what we can offer."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
