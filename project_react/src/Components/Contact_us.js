import '../App.css';

function Contact_us() {
  return (

    <div>

<div class="dt">
    <h2 class="h0 hc la">Contact us</h2>
    <form action="Contact2">
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label hc2 la" >Email :</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email" required/><br/>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label hc2 la">Name :</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputPassword3" placeholder="Name" required /><br/>
          </div>
        </div>
        <fieldset class="form-group">
          <div class="row">
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                <label class="form-check-label hc2 la" for="gridRadios1" >
                    Suggested
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                <label class="form-check-label hc2" for="gridRadios2 la" >
                    Complaint
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <br />

        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary b1">Send</button>
          </div>
        </div>
      </form>
    </div>
    <br/><br/><br/><br/>


    </div>
  );
}

export default Contact_us;
