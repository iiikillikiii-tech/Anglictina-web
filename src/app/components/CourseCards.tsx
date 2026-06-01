"use client";

import Link from "next/link";
import { ArrowRight, Check, Clock3, Plus } from "lucide-react";
import { courses } from "../data";
import { useCart } from "./SiteChrome";

export function CourseCards({ compact = false }: { compact?: boolean }) {
  const { addItem } = useCart();
  const visibleCourses = compact ? courses.slice(0, 3) : courses;

  return (
    <div className="course-grid">
      {visibleCourses.map((course) => (
        <article key={course.title} className={`course-card accent-${course.accent}`}>
          <div className="card-topline">
            <p className="card-eyebrow">{course.eyebrow}</p>
            <span className="card-icon" aria-hidden="true">
              <Clock3 size={18} strokeWidth={2.4} />
            </span>
          </div>
          <h3>{course.title}</h3>
          <div className="price-line">
            <span>{course.hours}</span>
            <strong>{course.price}</strong>
          </div>
          <p>{course.description}</p>
          <ul>
            {course.features.slice(0, compact ? 4 : course.features.length).map((feature) => (
              <li key={feature}>
                <Check aria-hidden="true" size={16} strokeWidth={2.6} />
                {feature}
              </li>
            ))}
          </ul>
          <button
            className="button button-card"
            type="button"
            onClick={() =>
              addItem({
                id: `course-${course.slug}`,
                title: course.title,
                category: "Kurz",
                price: course.price,
                priceCzk: course.priceCzk,
              })
            }
          >
            <Plus aria-hidden="true" size={17} strokeWidth={2.5} />
            Přidat do košíku
          </button>
        </article>
      ))}

      {compact ? (
        <Link className="course-card course-card-link" href="/kurzy">
          <span>Zobrazit všechny kurzy</span>
          <strong>
            Porovnat balíčky
            <ArrowRight aria-hidden="true" size={22} strokeWidth={2.4} />
          </strong>
        </Link>
      ) : null}
    </div>
  );
}
