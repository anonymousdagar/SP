import styles from "./Billing.module.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useState } from "react";
import { ToWords } from "to-words";

const Billing = (props) => {
  console.log(props);
  const today = new Date().toLocaleDateString();
  const [billTo, setBillTo] = useState({
    name: "",
    address: "",
    GSTN: "",
    SAC: "",
  });
  const [amount, setAmount] = useState(0);
  const toWords = new ToWords({
    localeCode: "en-IN",
    converterOptions: {
      currency: true,
      ignoreDecimal: true,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
      currencyOptions: {
        name: "Rupee",
        plural: "Rupees",
        symbol: "₹",
        fractionalUnit: {
          name: "Paisa",
          plural: "Paise",
          symbol: "",
        },
      },
    },
  });

  const downloadPdfDocument = (rootElementId) => {
    const input = document.getElementById(rootElementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4", false);
      pdf.addImage(imgData, "PNG", 0, 0, 600, 0, undefined, false);
      pdf.save("download.pdf");
    });
  };
  const plantChangeHandler = (event) => {
    const indexof = event.target.value;
    const selectedPlant = props.plants[indexof];
    setBillTo(selectedPlant);
    console.log("billto", billTo);
  };

  return (
    <div>
      <div id="BillingPdf" className={styles.mainContent}>
        <p className={styles.panNo}>
          Pan No. :AOOPP8192C & GSTIN .-06AOOPP8192C2ZJ
        </p>
        <div className={styles.header}>
          <div className={styles.company}>
            <h1>SHRIPAL TRANSPORT COMPANY</h1>
            <p>VILL :- CHANDPUR, PO :- BITHWANA, DISTT :- REWARI (HR.)</p>
            <p>Mob :- 9416979947, 9215379947</p>
            <hr />
          </div>

          <div className={styles.billTo}>
            <p>BILL NO:- STC/22-23/345</p>
            <p className={styles.billDate}>DATE:- {today}</p>
          </div>
          <div className={styles.plant}> 
            <select onChange={plantChangeHandler}>
              {props.plants.map((plant, index) => {
                return <option value={index}>{plant.name}</option>;
              })}
            </select>
            <p>Address : {billTo.address}</p>
            <p>GSTN :- {billTo.GSTN}</p>
            <p>SAC Code :{billTo.SAC}</p>
            <h3>Vehicle No:- HR36AM3561</h3>
          </div>
        </div>
        <div className={styles.body}>
          <table className={styles.table}>S
            <thead>
              <tr>
                <td>Sr.No & Veh No.</td>
                <td>Date</td>
                <td>Gr. No</td>
                <td>Outward</td>
                <td>Inward</td>
                <td>Gate Pass No</td>
                <td>From</td>
                <td>To</td>
                <td>Amount</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </tbody>
            <tfoot className={styles.tablefoot}>
              <tr>
                <td>Total Amount</td>
                <td>{amount}</td>
              </tr>
              <tr>
                <td>SGST@6%</td>
                <td>{Math.round(amount * 0.06)}</td>
              </tr>
              <tr>
                <td>CGST@6%</td>
                <td>{Math.round(amount * 0.06)}</td>
              </tr>
              <tr>
                <td>IGST@12%</td>
                <td>{Math.round(amount * 0.12)}</td>
              </tr>
              <tr>
                <td>Grand Total</td>
                <td>{Math.round(+amount + amount * 0.12)}</td>
              </tr>
            </tfoot>
          </table>
          {/* <TableDemo/> */}
          <p className={styles.inword}>In Words : {toWords.convert(+amount + amount * 0.12)}</p>
          <div className={styles.declaration}>
            <p>Declaration</p>
            <p>
              I Shripal Transport Company have taken registration under the CGST
              Act,2017 and have exercised the option to pay tax on services of
              GTA in relation to transport of goods supplies by us during the
              Financial Year 2022-2023 under forward charge.
            </p>
            <div className={styles.sign}>Auth. Signature</div>
          </div>
          
        </div>
        {/* <button
          onClick={() => {
            downloadPdfDocument("BillingPdf");
          }}
        >
          Download
        </button> */}
      </div>
      <button
          onClick={() => {
            downloadPdfDocument("BillingPdf");
          }}
        >
          Download
        </button>
    </div>
  );
};
export default Billing;
