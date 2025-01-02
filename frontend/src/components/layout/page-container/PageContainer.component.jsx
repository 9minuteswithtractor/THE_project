import "./PageContainer.styles.scss";

const PageContainer = ({ ContentComponent, sectionTitle, subTitle }) => {
  return (
    <section className="content-container">
      <div className="title-container">
        <h1>{sectionTitle}</h1>
      </div>
      <article className="article-container">
        <h2>{subTitle}</h2>
        <div className="page-content">{ContentComponent}</div>
      </article>
    </section>
  );
};

export default PageContainer;
