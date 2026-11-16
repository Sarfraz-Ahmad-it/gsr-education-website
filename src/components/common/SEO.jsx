
function SEO({
  title,
  description,
}) {
  return (
    <>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content="index, follow"
      />
    </>
  );
}

export default SEO;
