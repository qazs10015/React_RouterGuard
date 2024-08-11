import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useBlocker } from 'react-router';
import { z } from 'zod';
import { formSchema } from './schemas';

type FormProps = z.infer<typeof formSchema>;

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FormProps>({ resolver: zodResolver(formSchema), defaultValues: { name: '', email: '', age: '' } });

  // Block navigating elsewhere when data has been entered into the input
  useBlocker(() => {
    console.log(isDirty);
    if (isDirty) return !confirm('Do you want to leave this page?');
    return false;
  });

  const submit: SubmitHandler<FormProps> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h2 style={{ color: 'blue' }}>Try to click previous-page button on browser after typing anything in input field</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          Name：
          <input type="text" {...register('name')} />
          <span style={{ color: 'red' }}>{errors.name && <p>{errors.name.message}</p>}</span>
        </div>
        <div>
          Email：
          <input type="text" {...register('email')} />
          <span style={{ color: 'red' }}>{errors.email && <p>{errors.email.message}</p>}</span>
        </div>
        <div>
          Age：
          <input type="text" {...register('age')} />
          <span style={{ color: 'red' }}>{errors.age && <p>{errors.age.message}</p>}</span>
        </div>
        <button type="submit">click to submit</button>
      </form>
    </>
  );
}

export default MyForm;
