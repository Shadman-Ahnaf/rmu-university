
import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import { ArrowUpRight, Images } from "lucide-react";
import { galleryItems } from "../data/galleryData";
import "./GallerySection.css";

export default function GallerySection() {
  const firstRow = galleryItems.slice(0, 10);
  const secondRow = galleryItems.slice(10, 20);

  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const animationsRef = useRef<Animation[]>([]);
  const startTimesRef = useRef<number[]>([]);
  const trackWidthsRef = useRef<number[]>([]);
  const dragStartX = useRef(0);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;

    const tracks = Array.from(
      marqueeRef.current?.querySelectorAll<HTMLElement>(".gallery-track") ?? []
    );

    animationsRef.current = tracks.map(
      (track) => track.getAnimations()[0]
    ).filter((animation): animation is Animation => Boolean(animation));

    startTimesRef.current = animationsRef.current.map(
      (animation) => Number(animation.currentTime ?? 0)
    );

    trackWidthsRef.current = tracks.map(
      (track) => track.scrollWidth / 2
    );

    animationsRef.current.forEach((animation) => animation.pause());

    dragStartX.current = e.clientX;
    setIsDragging(true);

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const distance = e.clientX - dragStartX.current;

    animationsRef.current.forEach((animation, index) => {
      const width = trackWidthsRef.current[index];
      const duration = Number(animation.effect?.getTiming().duration);
      const startTime = startTimesRef.current[index];

      if (!width || !duration) return;

      const timeChange = (distance / width) * duration;

      animation.currentTime = startTime + timeChange;
    });
  };

const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
  setIsDragging(false);

  // Resume automatic animation after dragging
  animationsRef.current.forEach((animation) => {
    animation.play();
  });

  if (e.currentTarget.hasPointerCapture(e.pointerId)) {
    e.currentTarget.releasePointerCapture(e.pointerId);
  }
};

  const renderGalleryRow = (
    items: typeof galleryItems,
    rowName: string
  ) => (
    <div className="gallery-track">
      <div className="gallery-track-group">
        {items.map((item) => (
          <figure
            key={item.id}
            className="gallery-image-card"
            style={{ aspectRatio: item.ratio }}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              draggable={false}
            />

            <div className="gallery-image-overlay">
              <span>{item.title}</span>
              <ArrowUpRight size={17} />
            </div>
          </figure>
        ))}
      </div>

      <div className="gallery-track-group" aria-hidden="true">
        {items.map((item) => (
          <figure
            key={`${rowName}-${item.id}`}
            className="gallery-image-card"
            style={{ aspectRatio: item.ratio }}
          >
            <img
              src={item.image}
              alt=""
              loading="lazy"
              draggable={false}
            />

            <div className="gallery-image-overlay">
              <span>{item.title}</span>
              <ArrowUpRight size={17} />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="gallery"
      aria-label="University photo gallery"
      className="gallery-section"
    >
      <div className="gallery-heading">
        <div className="gallery-heading-content">
          <div className="gallery-eyebrow">
            <Images size={16} />
            <span>Moments at RMU</span>
          </div>

          <h2>Media</h2>
        </div>

        <a href="/gallery" className="gallery-explore-link">
          Explore Gallery
          <ArrowUpRight size={18} />
        </a>
      </div>

      <div
        ref={marqueeRef}
        className={`gallery-marquee ${isDragging ? "is-dragging" : ""}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {renderGalleryRow(firstRow, "first")}
        {renderGalleryRow(secondRow, "second")}
      </div>

      <div className="gallery-bottom">
        <span>RAJSHAHI MEDICAL UNIVERSITY</span>
        <span>Moments · Memories · Milestones</span>
      </div>
    </section>
  );
}
