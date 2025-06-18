import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

export const Contact = () => {
    return (
        <section className="py-20 px-8 bg-white text-center" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6 text-indigo-700">Contact</h2>
            <p className="text-lg mb-6">
                You can contact me by email at{' '}
                <a href="mailto:santiagovazquez010@gmail.com" className="text-indigo-600 underline hover:text-indigo-800">
                    santiagovazquez010@gmail.com
                </a>{' '}
               or through social media.
            </p>
            <div className="flex justify-center gap-6 text-3xl text-indigo-600">
                <a href="mailto:santiagovazquez010@gmail.com" aria-label="Gmail" className="hover:text-indigo-800">
                    <FaEnvelope />
                </a>
                <a href="https://www.linkedin.com/in/santiago-vazquez-205abb24b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-indigo-800">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/SantiagooVazquez" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-indigo-800">
                    <FaGithub />
                </a>
            </div>
        </section>
    )
}
