import LoginForm from "@/components/pages/login/login-form";

export function Login(){
    return (
        <main className="flex w-full h-screen">
            <section className="w-full bg-gradient-to-b from-[#D6A4FB] to-[#8B3DDB] h-full">

            </section>
            <section className="w-full flex justify-center items-center bg-[#F9F9F9] h-full">
                <LoginForm />
            </section>
        </main>
    )
}
