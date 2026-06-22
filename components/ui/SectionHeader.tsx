import Eyebrow from "./Eyebrow";
import AnimatedHeading, { type HeadingSegment } from "./AnimatedHeading";
import Reveal from "./Reveal";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  eyebrow: string;
  segments: HeadingSegment[];
  titleClassName?: string;
  aside?: React.ReactNode;
};

export default function SectionHeader({
  eyebrow,
  segments,
  titleClassName = "t-h2",
  aside,
}: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <AnimatedHeading
          as="h2"
          className={`${titleClassName} ${styles.title}`}
          segments={segments}
        />
      </div>
      {aside && <div className={styles.aside}>{aside}</div>}
    </div>
  );
}
