import SectionWrapper from "./SectionWrapper";

export default function Retail() {
  const brands = [
    {
      name: "Luxury Retail",
      img: "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
    },
    {
      name: "Global Brands",
      img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",
    },
    {
      name: "Fashion Hub",
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800",
    },
  ];

  return (
    <SectionWrapper>
      <section className="retail">
        <h2>Retail Excellence</h2>

        <div className="grid">
          {brands.map((b, i) => (
            <div key={i} className="card">
              <img src={b.img} />
              <p>{b.name}</p>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}