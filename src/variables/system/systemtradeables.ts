import type { SelectOption } from '@/types/selectInputOptions';

const InEnglish = [
  "Star Silk",
  "Comet Droplets",
  "Ion Sphere",
  "Decrypted User Data",
  "Teleport Coordinators",
  "Nanotube Crate",
  "Self-Repairing Heridium",
  "Optical Solvent",
  "5D Torus",
  "Superconducting Fibre",
  "De-Scented Bottles",
  "Neutron Microscope",
  "Instability Injector",
  "Organic Piping",
  "Neural Duct",
  "Dirt",
  "Unrefined Pyrite Grease",
  "Bromide Salt",
  "Polychromatic Zirconium",
  "Re-latticed Arc Crystal",
  "Enormous Metal Cog",
  "Non-Stick Piston",
  "Mesh Decouplers",
  "Holographic Crankshaft",
  "Vector Compressors",
  "Decommissioned Circuits",
  "Welding Soap",
  "Ion Capacitor",
  "Autonomous Positioning Unit",
  "Quantum Accelerator",
  "Spark Canister",
  "Industrial-Grade Battery",
  "Ohmic Gel",
  "Experimental Power Fluid",
  "Fusion Core",
] as const;

const InSpanish = [
  "Seda estelar",
  "Gotas de cometa",
  "Esfera de iones",
  "Datos de usuario desencriptados",
  "Coordinadores de teletransporte",
  "Caja de nanotubos",
  "Heridio autorreparable",
  "Disolvente óptico",
  "Toro 5D",
  "Fibra superconductora",
  "Botellas sin aroma",
  "Microscopio de neutrones",
  "Inyector de inestabilidad",
  "Canalización orgánica",
  "Conducto neuronal",
  "Suciedad",
  "Grasa de pirita sin refinar",
  "Sal de bromuro",
  "Circonio policromo",
  "Cristal de doble arco reticular",
  "Diente metálico enorme",
  "Pistón antiadherente",
  "Desacopladores de malla",
  "Cigüeñal holográfico",
  "Compresores vectoriales",
  "Circuitos desguazados",
  "Tiza para soldadura",
  "Condensador de iones",
  "Unidad de posicionamiento autónoma",
  "Acelerador de cuantos",
  "Bote de chispas",
  "Batería industrial",
  "Gel óhmico",
  "Fluido de energía experimental",
  "Núcleo de fusión",
] as const;

export const mappedSystemTradeables: SelectOption[] = InSpanish.map((mode, index) => ({
  label: mode,
  value: InEnglish[index],
}));

