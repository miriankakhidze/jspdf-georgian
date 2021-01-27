import { useRef } from "react";
import jsPDF from "jspdf";
import styles from "../styles/Home.module.css";
import "../components/Calibri Regular-normal";

export default function Home() {
  const ref = useRef();

  const onClick = () => {
    let doc = new jsPDF({
      unit: "px",
      format: "a4",
      putOnlyUsedFonts: true,
      floatPrecision: 16,
      hotfixes: ["px_scaling"],
      // filename: "Test.pdf",
      filters: ["ASCIIHexEncode"],
    });

    doc
      .html(ref.current, {
        filename: "test",
        // fontFaces: [
        //   {
        //     family: "Calibri Regular",
        //     style: "normal",
        //     // weight: "normal",
        //     // stretch: "normal",
        //     src: ["/fonts/Calibri Regular.ttf"],
        //   },
        // ],
        x: 5,
        y: 5,
      })
      .output("pdfobjectnewwindow");
  };

  return (
    <div className={styles.container}>
      <button onClick={onClick} className={styles.btn}>
        PDF
      </button>
      <div
        ref={ref}
        style={{ width: "90%", margin: 15, fontFamily: "Calibri Regular" }}
      >
        <div>
          <h1>English</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div>
          <h1>Georgian</h1>
          <p>
            Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია.
            იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა
            ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი დაბეჭდა. მისი ტექსტი
            არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან დღემდე, ელექტრონული
            ტიპოგრაფიის დრომდეც უცვლელად მოაღწია. განსაკუთრებული პოპულარობა მას
            1960-იან წლებში გამოსულმა Letraset-ის ცნობილმა ტრაფარეტებმა მოუტანა,
            უფრო მოგვიანებით კი — Aldus PageMaker-ის ტიპის საგამომცემლო
            პროგრამებმა, რომლებშიც Lorem Ipsum-ის სხვადასხვა ვერსიები იყო
            ჩაშენებული.
          </p>
        </div>
      </div>
    </div>
  );
}
