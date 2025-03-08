import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Convites Animados",
    icon: "https://api.dicebear.com/7.x/icons/svg?icon=gift&backgroundColor=FFFFFF&iconColor=FF9AA2",
    path: "/categoria/animados",
  },
  {
    id: 2,
    name: "Convites Interativos",
    icon: "https://api.dicebear.com/7.x/icons/svg?icon=balloon&backgroundColor=FFFFFF&iconColor=67B99A",
    path: "/categoria/interativos",
  },
  {
    id: 3,
    name: "Convites Simples",
    icon: "https://api.dicebear.com/7.x/icons/svg?icon=bell&backgroundColor=FFFFFF&iconColor=FFD166",
    path: "/categoria/simples",
  },
];

export function ProductCategories() {
  return (
    <section className="py-4 bg-[#FFDAC1] bg-opacity-20">
      <div className="container">
        <h2 className="text-2xl font-bold text-center text-[#FF9AA2] mb-4">
          Categorias
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="flex flex-col items-center group bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 mb-2">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-[#FF9AA2] group-hover:text-[#67B99A] text-center">
                {category.name}
              </h3>
              <div className="h-1 w-full bg-[#B5EAD7] mt-1"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
