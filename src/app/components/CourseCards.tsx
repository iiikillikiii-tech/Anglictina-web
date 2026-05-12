"use client";

import Link from "next/link";
import { courses } from "../data";
import { useCart } from "./SiteChrome";

export function CourseCards({ compact = false }: { compact?: boolean }) {
  const { addItem } = useCart();
  const visibleCourses = compact ? courses.slice(0, 3) : courses;

  return (
    <div className="course-grid">
      {visibleCourses.map((course) => (
        <article key={course.title} className={`course-card accent-${course.accent}`}>
          <p className="card-eyebrow">{course.eyebrow}</p>
          <h3>{course.title}</h3>
          <div className="price-line">
            <span>{course.hours}</span>
            <strong>{course.price}</strong>
          </div>
          <p>{course.description}</p>
          <ul>
            {course.features.slice(0, compact ? 4 : course.features.length).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <button className="button button-card" type="button" onClick={() => addItem(course.title)}>
            Přidat do košíku
          </button>
        </article>
      ))}

      {compact ? (
        <Link className="course-card course-card-link" href="/kurzy">
          <span>Zobrazit všechny kurzy</span>
          <strong>Porovnat balíčky</strong>
        </Link>
      ) : null}
    </div>
  );
}
