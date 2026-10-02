import Link from "next/link";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import Pageheader from "../../../shared/layout-components/pageheader/pageheader";
import Seo from "../../../shared/layout-components/seo/seo";

const print = () => {
  window.print();
};
const Invoice = () => (
  <div>
    <Seo title={"Invoice"} />
    <Pageheader title="INVOICE" heading="Pages" active="Invoice" />
    <Row className=" row-sm">
      <Col md={12} lg={12}>
        <Card className=" custom-card">
          <Card.Body>
            <div className="d-lg-flex">
              <h6 className="main-content-label mb-1">
                <span className="d-flex mb-4">
                  <Link href="/admin/dashboard">
                    <img
                      src="/escarpasLogo.jpeg"
                      className="sign-favicon ht-40"
                      alt="logo"
                    />
                  </Link>
                </span>
              </h6>
              <div className="ms-auto">
                <p className="mb-1">
                  <span className="fw-bold">Invoice No : #000321</span>
                </p>
              </div>
            </div>
            <Row className=" row-sm">
              <Col lg={6}>
                <p className="h3">Invoice Form:</p>
                <address>
                  Street Address
                  <br />
                  State, City
                  <br />
                  Region, Postal Code
                  <br />
                  yourdomain@example.com
                </address>
              </Col>
              <Col lg={6} className="text-end">
                <p className="h3">Invoice To:</p>
                <address>
                  Street Address
                  <br />
                  State, City
                  <br />
                  Region, Postal Code
                  <br />
                  ypurdomain@example.com
                </address>
                <div className="">
                  <p className="mb-1">
                    <span className="fw-bold">Invoice Date :</span>
                  </p>
                  <address>01st November 2020</address>
                </div>
              </Col>
            </Row>
            <div className="table-responsive mg-t-40">
              <Table className="table table-invoice table-bordered">
                <thead>
                  <tr>
                    <th className="wd-20p">Product</th>
                    <th className="wd-40p">Description</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-end">Unit</th>
                    <th className="text-end">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Logo Creation</td>
                    <td className="fs-12">Logo and business cards design</td>
                    <td className="text-center">2</td>
                    <td className="text-end">$60.00</td>
                    <td className="text-end">$120.00</td>
                  </tr>
                  <tr>
                    <td>Online Store Design & Development</td>
                    <td className="fs-12">
                      Design/Development for all popular modern browsers
                    </td>
                    <td className="text-center">3</td>
                    <td className="text-end">$80.00</td>
                    <td className="text-end">$240.00</td>
                  </tr>
                  <tr>
                    <td>App Design</td>
                    <td className="fs-12">Promotional mobile application</td>
                    <td className="text-center">1</td>
                    <td className="text-end">$40.00</td>
                    <td className="text-end">$40.00</td>
                  </tr>
                  <tr>
                    <td className="valign-middle" colSpan="2" rowSpan="4">
                      <div className="invoice-notes">
                        <label className="main-content-label fs-13">
                          Notes
                        </label>
                        <p className="text-dark">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                      </div>
                    </td>
                    <td className="text-end">Sub-Total</td>
                    <td className="text-end" colSpan="2">
                      $400.00
                    </td>
                  </tr>
                  <tr>
                    <td className="text-end">Tax</td>
                    <td className="text-end" colSpan="2">
                      3%
                    </td>
                  </tr>
                  <tr>
                    <td className="text-end">Discount</td>
                    <td className="text-end" colSpan="2">
                      10%
                    </td>
                  </tr>
                  <tr>
                    <td className="text-end tx-uppercase tx-bold tx-inverse">
                      TOTAL DUE
                    </td>
                    <td className="text-end" colSpan="2">
                      <h4 className="fw-bold">$450.00</h4>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
          <Card.Footer className=" d-flex justify-content-end">
            <div className="btn-list">
              <Button variant="primary" className="btn ripple btn-primary mb-1">
                <i className="fe fe-credit-card me-1"></i> Pay Invoice
              </Button>
              <Button
                variant="secondary"
                className="btn ripple btn-secondary mb-1"
              >
                <i className="fe fe-send me-1"></i> Send Invoice
              </Button>
              <Button
                variant="info"
                className="btn ripple btn-info mb-1"
                onClick={() => print()}
              >
                <i className="fe fe-printer me-1"></i> Print Invoice
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  </div>
);

Invoice.layout = "Contentlayout";

export default Invoice;
