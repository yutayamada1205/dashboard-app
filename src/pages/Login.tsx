import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().min(1, { message: 'メールアドレスを入力してください。' }),
  password: z.string().min(1, { message: 'パスワードを入力してください。' })
})
type FormData = z.infer<typeof formSchema>

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg py-8 px-24">

        {/* タイトル */}
        <div className="text-center mt-2 mb-6">
          <h1 className="text-xl font-bold">ログイン画面</h1>
        </div>

        {/* フォーム */}
        <form onSubmit={handleSubmit((onSubmit))}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="メールアドレス"
              className={`w-full border border-gray-200 p-2 rounded-md ${errors.email ? 'border-red-500' : ''}`}
              {...register('email')}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          
          <div className="mb-4">
            <input
              type="password"
              placeholder="パスワード"
              className={`w-full border border-gray-200 p-2 rounded-md ${errors.password ? 'border-red-500' : ''}`}
              {...register('password')}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
          
          <div className="text-center mb-8">
            <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
              <span className="mr-1">▶</span>
              パスワードを忘れた方はこちら
            </a>
          </div>
          
          <div className="mb-4">              
            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800"
            >
              ログインする
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};