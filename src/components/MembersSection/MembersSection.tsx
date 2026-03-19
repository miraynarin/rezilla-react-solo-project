import styles from "./MembersSection.module.scss";
const members = [
  {
    id: 1,
    name: "Brendon M",
    role: "CEO & Founder",
    image: "/images/MembersSection/membersSection-img1.jpg",
  },
  {
    id: 2,
    name: "Jodi J. Appleby",
    role: "Real Estate Developer",
    image: "/images/MembersSection/membersSection-img2.jpg",
  },
  {
    id: 3,
    name: "Justin S. Meza",
    role: "Listing Agent",
    image: "/images/MembersSection/membersSection-img3.jpg",
  },
  {
    id: 4,
    name: "Susan T. Smith",
    role: "Buyer's Agent",
    image: "/images/MembersSection/membersSection-img4.jpg",
  },
];
const MembersSection = () => {
  return (
    <div className={styles.memberSection}>
      <div className={styles.memberContainer}>
        <div className={styles.memberTopArea}>
          <p className={styles.memberTitle}>INTRODUCE YOURSELF TO </p>
          <p className={styles.memberText}>Our Team of Experts</p>
        </div>
        <div className={styles.membersGrid}>
          {members.map((item) => (
            <div key={item.id} className={styles.membersCard}>
              <div className={styles.membersImageWrapper}>
                <img src={item.image} alt={item.name} />
              </div>
              <div className={styles.nameRoleWrapper}>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersSection;
