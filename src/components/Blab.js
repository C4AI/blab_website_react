import React from 'react';

function Blab() {
    return (
        <section className="page-section" id="blue_amazonia">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">BLAB</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <ul className="timeline">
                        <li>
                        <div className="timeline-image">
                            <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
                            <h4>2020</h4>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">Beginning</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                            </div>
                        </div>
                        </li>
                        <li className="timeline-inverted">
                        <div className="timeline-image">
                            <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
                            <h4>2021</h4>
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4 className="subheading">Physical Headquarters at InovaUSP</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                            </div>
                        </div>
                        </li>
                        <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>Be Part
                            <br/>Of Our
                            <br/>Story!</h4>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Blab;