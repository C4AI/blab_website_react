import React from 'react';

const blabLinks = [
    {
      title: 'Title 1',
      caption: 'Text 1'
    },
    {
      title: 'Title 2',
      caption: 'Text 2'
    },
    {
      title: 'Title 3',
      caption: 'Text 3'
    },
    {
      title: 'Title 4',
      caption: 'Text 4'
    },
    {
      title: 'Title 5',
      caption: 'Text 5'
    },
    {
      title: 'Title 6',
      caption: 'Text 6'
    }
  ]

  function BlueAmazonia() {
    return (
        
        <section className="bg-light page-section" id="blab">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Blue Amazonia</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row">
                {
                    blabLinks && blabLinks.map(({ title, caption }, index) => 
                        <div className="col-md-4 col-sm-6 blab-item">
                            <a className="blab-link" data-toggle="modal" href="#blabModal1">
                                <div className="blab-hover">
                                    <div className="blab-hover-content">
                                        <i className="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={ `https://unsplash.it/350/140/?${Math.floor(Math.random(0,100) * 100)}` } alt="blab_img" />
                            </a>
                            <div className="blab-caption">
                                <h4>{ title }</h4>
                                <p className="text-muted">{ caption }</p>
                            </div>
                        </div>
                    )
                }
            </div>
            </div>
        </section>
    );
}
export default BlueAmazonia;