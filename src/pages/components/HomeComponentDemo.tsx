import { ComponentDemo } from "@/components/demo/ComponentDemo"
import { AccreditationBar } from "@/components/sparkui"

const HomeComponentDemo = () => {
  const codeExample = `import { AccreditationBar } from "@/components/sparkui"

// Basic AccreditationBar
<AccreditationBar 
  title="Accreditations & Recognitions"
  subtitle="SD Worx is an international recognized organisation always striving to offer the best service to our customers"
  logos={[
    { src: "/placeholder.svg", alt: "Gartner", name: "Gartner" },
    { src: "/placeholder.svg", alt: "ISAE 3402", name: "ISAE 3402" },
    { src: "/placeholder.svg", alt: "NelsonHall", name: "NelsonHall" },
    { src: "/placeholder.svg", alt: "CAF", name: "CAF" },
    { src: "/placeholder.svg", alt: "ISO 27001", name: "ISO 27001" }
  ]}
/>`

  return (
    <div className="p-8">
      <ComponentDemo
        title="Accreditation Bar"
        description="Display accreditations and recognitions in a professional layout matching your Figma design"
        code={codeExample}
      >
        <div style={{ margin: "-2rem -2rem 0 -2rem" }}>
          <AccreditationBar />
        </div>
      </ComponentDemo>
    </div>
  )
}

export default HomeComponentDemo