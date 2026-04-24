import SectionWrapper from "./SectionWrapper";

export default function ImageSection() {
  return (
    <SectionWrapper>
      <section
        className="image-section"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607082349566-187342175e2f')",
        }}
      >
        <div className="overlay">
          <h2>A Destination Beyond Shopping</h2>
        </div>
      </section>
    </SectionWrapper>
  );
}