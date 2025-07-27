import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-8">
      <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md p-6 w-full max-w-xl text-center space-y-4">
        <div className="flex justify-center items-center space-x-2">
          <ZapIcon className="w-6 h-6" />
          <h2 className="text-xl font-semibold">You're being rate-limited</h2>
        </div>
        <p className="text-muted-foreground">
          You've made too many requests in a short time. Please slow down and try again later.
        </p>
      </div>
    </div>
  );
};

export default RateLimitedUI;
