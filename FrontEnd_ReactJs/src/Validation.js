class ValidationComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          fields: {
            name: "",
            email: "",
            phone_number: ""
          },
          errors: {}
        };
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            name: "required",
            email: "required|email",
            phone_number: "required|numeric|digits_between:10,12",
        });
        this.form.onformsubmit = (fields) => {
          // Do you ajax calls here.
        }
      }
    
      render() {
        return (<React.Fragment>
            <form onSubmit={this.form.handleSubmit}>
                <p>
                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.name}
                    />
                  </label>
                  <label className="error">
                    {this.state.errors.name ? this.state.errors.name : ""}
                  </label>
                </p>
    
                <p>
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.email}
                    />
                  </label>
                  <label className="error">
                    {this.state.errors.email ? this.state.errors.email : ""}
                  </label>
                </p>
    
                <p>
                  <label>
                    Phone
                    <input
                      type="tel"
                      name="phone_number"
                      onBlur={this.form.handleBlurEvent}
                      onChange={this.form.handleChangeEvent}
                      value={this.state.fields.phone_number}
                    />
                  </label>
                  <label className="error">
                    {this.state.errors.phone_number ? this.state.errors.phone_number : ""}
                  </label>
                </p>
                <p>
                  <button type="submit">Submit</button>
                </p>
            </form>
        </React.Fragment>)
      }
    }
 //   Functional Component
   // The given below example is for Functional component with the usage of hooks. View all available apis in documentation.
    
    //Example 1
    import React from "react";
    import { useFormInputValidation } from "react-form-input-validation";
    
    const ValidationForm = () => {
      const [fields, errors, form] = useFormInputValidation({
        customer_name: "",
        email_address: "",
        phone_number: "",
      }, {
        customer_name: "required",
        email_address: "required|email",
        phone_number: "required|numeric|digits_between:10,12"
      });
    
      const onSubmit = async (event) => {
        const isValid = await form.validate(event);
        if (isValid) {
          // console.log(fields, errors);
          // Perform api call here
        }
      }
      
      return <div style={{maxWidth: "600px", margin: "0 auto"}}>
      <h3>React Form Input Validation - validate</h3>
      <form
        className="myForm"
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <p>
          <label>
            Name
            <input
              type="text"
              name="customer_name"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={state.fields.customer_name}
          />
          </label>
          <label className="error">
            {errors.customer_name
              ? errors.customer_name
              : ""}
          </label>
        </p>
    
        <p>
          <label>
            Phone
            <input
              type="tel"
              name="phone_number"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.phone_number}
            />
          </label>
          <label className="error">
            {errors.phone_number
              ? errors.phone_number
              : ""}
          </label>
        </p>
    
        <p>
          <label>
            Email
            <input
              type="email"
              name="email_address"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.email_address}
            />
          </label>
          <label className="error">
            {errors.email_address
              ? errors.email_address
              : ""}
          </label>
        </p>
    
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
    }
    
    export default ValidationForm;
   // Example 2
    import React from "react";
    import { useFormInputValidation } from "react-form-input-validation";
    
    const ValidationForm2 = () => {
        const [fields, errors, form] = useFormInputValidation({
          email_address: "",
          password: "",
        }, {
          email_address: "required|email",
          password: "required"
        });
      
        useEffect(() => {
          if (form.isValidForm) {
            // console.log(fields, errors, form);
            // Perform api call here
          }
        }, [])
        
        return <div style={{maxWidth: "600px", margin: "0 auto"}}>
        <h3>React Form Input Validation - usage of form.isValidForm</h3>
        <form
          className="myForm"
          noValidate
          autoComplete="off"
          onSubmit={form.handleSubmit}
        >
          <p>
            <label>
              Email
              <input
                type="email"
                name="email_address"
                onBlur={form.handleBlurEvent}
                onChange={form.handleChangeEvent}
                value={fields.email_address}
              />
            </label>
            <label className="error">
              {errors.email_address
                ? errors.email_address
                : ""}
            </label>
          </p>
      
          <p>
            <label>
              Password
              <input
                type="tel"
                name="password"
                onBlur={form.handleBlurEvent}
                onChange={form.handleChangeEvent}
                value={fields.password}
              />
            </label>
            <label className="error">
              {errors.password
                ? errors.password
                : ""}
            </label>
          </p>
      
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
      }
      
      export default ValidationForm2;
    //Custom attribute name
   // Refer the below example to override the attribute name,
    
        <input
            type="text"
            name="name"
            onBlur={this.form.handleBlurEvent}
            onChange={this.form.handleChangeEvent}
            value={this.state.fields.name}
            data-attribute-name="Username"
        />
}