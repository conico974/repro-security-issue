
export function getStaticProps() {
  return {
    props: {
      title: "500",
    },
  };
}

export default function Custom500() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}