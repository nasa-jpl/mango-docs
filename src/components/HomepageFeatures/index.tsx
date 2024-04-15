import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  route: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Tutorials",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>Read stuff.</>,
    route: "docs/tutorials/overview",
  },
  {
    title: "Latest Features",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>Check out the latest features.</>,
    route: "docs/latest-features",
  },
  {
    title: "Need Help?",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Reach out to the dev team for help.</>,
    route: "docs/need-help",
  },
];

function Feature({ title, Svg, description, route }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <Link to={route}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
