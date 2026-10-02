import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import {
  BasicTable,
  Savetable,
} from "../../../shared/data/tables/datatablesdata";
import Pageheader from "../../../shared/layout-components/pageheader/pageheader";
import Seo from "../../../shared/layout-components/seo/seo";
const Datatables = () => {
  return (
    <Fragment>
      <Seo title={"Datatables"} />
      <Pageheader title="DATA TABLES" heading="Tables" active="Data tables" />
      {/* <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Datatable</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <BasicTable />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}
      {/* <Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<div className="card-title">
								Responsive Datatable
							</div>
						</Card.Header>
						<Card.Body>
							<ResponsiveDataTable />
						</Card.Body>
					</Card>
				</Col>
			</Row> */}
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">CUPONS CADASTRADOS</div>
            </Card.Header>
            <Card.Body>
              <Savetable />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};
Datatables.layout = "Contentlayout";
export default Datatables;
