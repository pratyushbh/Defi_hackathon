import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                ARBINOM
              </h6>
              <p>
                ARBINOM is a web3 dapp that provide services other than basic crypto wallets can provide
              </p>
            </MDBCol>

           

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
              <Link to="/"><a href='#!' className='text-reset'>
                Homepage
                </a></Link>
              </p>
              <p>
              <Link to="/FlashLoans" ><a href='#!' className='text-reset'>
                Flash Loan
                </a></Link>
              </p>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href=''>
          ARBINOM
        </a>
      </div>
    </MDBFooter>
  );
}