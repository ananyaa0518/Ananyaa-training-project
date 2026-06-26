import Button from '../components/ui/button.tsx';
import Input from '../components/ui/input.tsx';
import logo from '../assets/image/logo.png';
import FeatureCard from '../components/ui/FeatureCard.tsx';
function Login() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Side */}
      <div className="flex w-1/2 flex-col justify-between bg-[#163B69] px-16 py-12 text-white">
        <div>
          <img src={logo} alt="JR POS" className="mb-10 w-24" />

          <h1 className="text-5xl font-bold leading-tight">
            YOUR BUSINESS,
            <br />
            <span className="text-[#F4A300]">FULLY IN CONTROL.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base text-gray-300">
            The POS that gives every business enterprise-grade tools — unlimited
            users, every feature, from day one.
          </p>

          <div className="mt-8 space-y-3">
            <FeatureCard
              icon="👥"
              title="Unlimited users — always"
              description="Every plan, every tier, no extra cost. Ever."
            />

            <FeatureCard
              icon="📈"
              title="Setup in under 30 minutes"
              description="From signup to your first sale, fast."
            />

            <FeatureCard
              icon="⚡"
              title="No feature gates, ever"
              description="Everything included from day one on every plan."
            />
          </div>
        </div>

        <p className="text-xs text-gray-300">
          © 2026 SEEN Pty Ltd · jrpos.app · support@jrpos.app
        </p>
      </div>

      {/* Right Side */}
      <div className="flex w-1/2 items-center justify-center bg-[#F8F8F8] px-16">
        <div className="w-full max-w-lg">
          <h1 className="text-5xl font-bold text-black">Login</h1>

          <p className="mt-3 text-base text-gray-500">
            Enter your operator credentials to continue
          </p>

          <div className="mt-8 space-y-5">
            <Input label="Username" placeholder="Enter your email" />

            <Input
              label="Password"
              type="password"
              placeholder="*************"
            />
          </div>

          <div className="mt-3 text-right">
            <button className="text-sm text-gray-500 hover:text-[#F4A300]">
              Forgot Password?
            </button>
          </div>

          <div className="mt-8">
            <Button className="w-full">Login</Button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <span className="cursor-pointer font-semibold text-[#F4A300]">
              Create an account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
