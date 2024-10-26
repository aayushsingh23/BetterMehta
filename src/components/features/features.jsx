import "./features.css"
import Fast from "../../assets/fast-icon.png"
import Money from "../../assets/money-icon.png"
import Secure from "../../assets/secure-icon.png"
export default function Features(){
    return(
        <div className="features-section mt-4 d-flex justify-content-center ">
        {/* Feature 1 */}
        <div className="feature-item text-center mx-1 ">
          <img src={Secure} alt="Safe & Secure" className="feature-icon" />
          <h5>Safe & Secure</h5>
          <p>Data will be auto-deleted after delivery</p>
        </div>

        {/* Feature 2 */}
        <div className="feature-item text-center mx-1 ">
          <img src={Fast} alt="Fast Delivery" className="feature-icon" />
          <h5>Fast Delivery</h5>
          <p>Get printout in minutes</p>
        </div>

        {/* Feature 3 */}
        <div className="feature-item text-center mx-1 ">
          <img src={Money} alt="Lowest Prices" className="feature-icon" />
          <h5>Secure Payment</h5>
          <p>Printout starting at ₹3</p>
        </div>
      </div>
    )
}
{/* <div class="container text-center">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div> */}