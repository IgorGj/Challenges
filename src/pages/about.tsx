import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import PageTitle from "../components/PageTitle";
import { About } from "./interfaces";

interface Props {
  aboutPage: About;
}

const About: NextPage<Props> = ({ aboutPage }) => {
  const {
    title,
    first_image,
    first_content,
    second_content,
    third_content,
    second_image,
    second_title,
    fourth_content,
    fifth_content,
    author,
  } = aboutPage;
  return (
    <>
      <Head>
        <title>Store - About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title={title} />

      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          <div className="row p-b-148">
            <div className="col-md-7 col-lg-8">
              <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                <h3 className="mtext-111 cl2 p-b-16">{title}</h3>

                <p className="stext-113 cl6 p-b-26">{fifth_content}</p>

                <p className="stext-113 cl6 p-b-26">{second_content}</p>

                <p className="stext-113 cl6 p-b-26">{third_content}</p>
              </div>
            </div>

            <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
              <div className="how-bor1 ">
                <div className="hov-img0">
                  <img src={first_image} alt="IMG" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="order-md-2 col-md-7 col-lg-8 p-b-30">
              <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                <h3 className="mtext-111 cl2 p-b-16">{second_title}</h3>

                <p className="stext-113 cl6 p-b-26">{fourth_content}</p>

                <div className="bor16 p-l-29 p-b-9 m-t-22">
                  <p className="stext-114 cl6 p-r-40 p-b-11">{fifth_content}</p>

                  <span className="stext-111 cl8">{author}</span>
                </div>
              </div>
            </div>

            <div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
              <div className="how-bor2">
                <div className="hov-img0">
                  <img src={second_image} alt="IMG" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:5001/about_page");
  const aboutPage = await res.json();

  return {
    props: {
      aboutPage,
    },
  };
};

export default About;
