import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Search,
  Filter,
  Clock,
  Users,
  Star,
  BookOpen,
  Code,
  Briefcase,
  TrendingUp,
  Award,
  CheckCircle,
  Play
} from "lucide-react";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");

  const headerRef = useScrollAnimation();
  const filtersRef = useScrollAnimation();
  const coursesRef = useScrollAnimation();

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "programming", label: "Programming & Development" },
    { value: "data-science", label: "Data Science & Analytics" },
    { value: "design", label: "Design & Creative" },
    { value: "business", label: "Business & Management" },
    { value: "marketing", label: "Digital Marketing" },
    { value: "career-skills", label: "Career Development" }
  ];

  const levels = [
    { value: "all", label: "All Levels" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" }
  ];

  const durations = [
    { value: "all", label: "Any Duration" },
    { value: "short", label: "Under 5 hours" },
    { value: "medium", label: "5-20 hours" },
    { value: "long", label: "20+ hours" }
  ];

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, React, and Node.js from scratch to build modern web applications.",
      category: "programming",
      level: "beginner",
      duration: "45 hours",
      price: "Free",
      rating: 4.8,
      students: 12500,
      instructor: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      featured: true
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description: "Master Python, pandas, matplotlib, and machine learning basics for data analysis.",
      category: "data-science",
      level: "intermediate",
      duration: "32 hours",
      price: "₹2,999",
      rating: 4.9,
      students: 8750,
      instructor: "Dr. Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      skills: ["Python", "Pandas", "Machine Learning", "Statistics"],
      featured: true
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      description: "Learn design thinking, wireframing, prototyping, and user research methodologies.",
      category: "design",
      level: "beginner",
      duration: "28 hours",
      price: "₹1,999",
      rating: 4.7,
      students: 6420,
      instructor: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=300&h=200&fit=crop",
      skills: ["Figma", "User Research", "Prototyping", "Design Thinking"],
      featured: false
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      description: "Comprehensive guide to SEO, SEM, social media marketing, and content strategy.",
      category: "marketing",
      level: "intermediate",
      duration: "22 hours",
      price: "₹1,499",
      rating: 4.6,
      students: 9320,
      instructor: "Amit Patel",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
      featured: false
    },
    {
      id: 5,
      title: "Resume Building & Interview Skills",
      description: "Create compelling resumes and master interview techniques for landing your dream job.",
      category: "career-skills",
      level: "beginner",
      duration: "8 hours",
      price: "Free",
      rating: 4.9,
      students: 15600,
      instructor: "Neha Gupta",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b913?w=300&h=200&fit=crop",
      skills: ["Resume Writing", "Interview Prep", "Career Planning"],
      featured: true
    },
    {
      id: 6,
      title: "Business Analytics with Excel",
      description: "Advanced Excel techniques for business analysis, data visualization, and reporting.",
      category: "business",
      level: "intermediate",
      duration: "18 hours",
      price: "₹999",
      rating: 4.5,
      students: 7890,
      instructor: "Vikram Singh",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      skills: ["Excel", "Data Analysis", "Pivot Tables", "Dashboards"],
      featured: false
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    
    let matchesDuration = true;
    if (selectedDuration !== "all") {
      const hours = parseInt(course.duration);
      if (selectedDuration === "short") matchesDuration = hours < 5;
      else if (selectedDuration === "medium") matchesDuration = hours >= 5 && hours <= 20;
      else if (selectedDuration === "long") matchesDuration = hours > 20;
    }
    
    return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
  });

  const featuredCourses = courses.filter(course => course.featured);

  return (
    <div className="page-container page-bg-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className="text-center mb-12 scroll-animate"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4 animate-fadeInUp">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Courses
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Discover courses designed to boost your career prospects and help you achieve your professional goals
          </p>
        </div>

        {/* Featured Courses */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 animate-fadeInUp">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <Card key={course.id} className="content-section hover-lift group animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                    Featured
                  </Badge>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg flex items-center justify-center">
                    <Button size="sm" variant="secondary">
                      <Play className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{course.level}</Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {course.skills.slice(0, 3).map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {course.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{course.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-primary">{course.price}</div>
                    <Button size="sm" className="hover-lift">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Filters */}
        <div 
          ref={filtersRef}
          className="bg-card rounded-xl p-6 mb-8 border border-border shadow-sm scroll-animate"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-2/3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map(level => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger>
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  {durations.map(duration => (
                    <SelectItem key={duration.value} value={duration.value}>
                      {duration.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* All Courses */}
        <div 
          ref={coursesRef}
          className="scroll-animate"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">All Courses</h2>
            <div className="text-muted-foreground">
              {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <Card key={course.id} className="content-section hover-lift group animate-slideInLeft" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {course.featured && (
                    <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg flex items-center justify-center">
                    <Button size="sm" variant="secondary">
                      <Play className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{course.level}</Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {course.skills.slice(0, 3).map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {course.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{course.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-primary">{course.price}</div>
                    <Button size="sm" className="hover-lift">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mt-16 animate-fadeInUp">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of students who have already transformed their careers with our courses.
          </p>
          <Button size="lg" variant="secondary" className="hover-lift">
            <BookOpen className="h-5 w-5 mr-2" />
            Browse All Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Courses;