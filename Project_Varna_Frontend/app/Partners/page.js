'use client'
// import { useFormState } from 'react-dom';
import ImagePicker from '@/app/Components/varna/image-picker';
import classes from './page.module.css';
import GetPartners from '@/lib/getPartners';
// import { shareMeal } from '@/lib/actions';
// import MealsFormSubmit from '@/app/Components/varna/meals-form-submit';

export default function Partners() {
  // const [state, formAction]= useFormState(shareMeal, {messge:null});
  return (
    <>
      <header className={classes.header}>
        <h1>
          Apply here to be <span className={classes.highlight}> Our Valuable Partner</span>
        </h1>
        <p>Let Us Know About You!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} >
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title Of Your Profession</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary About You</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Why you want to join Varna</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="your image" name="image"/>
          <p className={classes.actions}>
            <button>
             Apply
            </button>
          </p>
          {/* {state.message && <p>{state.message}</p>} */}
        </form>
      </main>
    </>
  );
}