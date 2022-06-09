import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../utils/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export const getStaticPaths = async () => {
  return {
    paths: getAllPostIds(),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      postData: await getPostData(params.id),
    },
  };
};

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        {postData.id}
        <br />
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;
