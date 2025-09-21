import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  city: string;
}

type SubmitStatus = "idle" | "success" | "error";

interface UseWeb3FormOptions {
  accessKey?: string;
  customSubject?: string;
}

export const useWeb3Form = (options: UseWeb3FormOptions = {}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      city: "",
    });
    setSubmitStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: options.accessKey || "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          subject:
            options.customSubject || "New Inquiry from Ketaki Food Website",
          from_name: formData.name,
          message: `Name: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        // Reset form data but keep status for user feedback
        setFormData({
          name: "",
          phone: "",
          city: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    resetForm,
  };
};
