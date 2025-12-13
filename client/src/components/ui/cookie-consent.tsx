import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Cookie, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface CookieConsentProps {
  className?: string;
}

export const CookieConsent = ({ className }: CookieConsentProps) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
    // Initialize analytics here
    initializeAnalytics();
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  const initializeAnalytics = () => {
    // Add analytics initialization logic here
    console.log("Analytics initialized with user consent");
  };

  if (!showBanner) return null;

  return (
    <div className={cn("fixed bottom-0 left-0 right-0 z-50 p-4", className)}>
      <Card className="mx-auto max-w-4xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                We value your privacy
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, 
                and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                You can manage your preferences by clicking "Cookie Settings".
              </p>
            </div>

            {showSettings && (
              <div className="space-y-3 p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Necessary Cookies</h4>
                    <p className="text-xs text-muted-foreground">Required for basic functionality</p>
                  </div>
                  <div className="text-xs text-muted-foreground">Always Active</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Analytics Cookies</h4>
                    <p className="text-xs text-muted-foreground">Help us understand how you use our site</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Marketing Cookies</h4>
                    <p className="text-xs text-muted-foreground">Used to deliver relevant ads</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                onClick={acceptAll}
                className="font-body"
                variant="hero"
              >
                Accept All
              </Button>
              
              <Button
                onClick={acceptNecessary}
                variant="outline"
                className="font-body"
              >
                Necessary Only
              </Button>
              
              <Button
                onClick={() => setShowSettings(!showSettings)}
                variant="ghost"
                size="sm"
                className="font-body"
              >
                <Settings className="w-4 h-4 mr-2" />
                Cookie Settings
              </Button>
            </div>
          </div>

          <Button
            onClick={() => setShowBanner(false)}
            variant="ghost"
            size="sm"
            className="flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};