type MetaProperty = {
  property: string;
  content: string;
};

type MetaName = {
  name: string;
  content: string;
};

type Meta = MetaName | MetaProperty;

export interface SEOProps {
  title: string;
  description?: string;
  meta?: Meta[];
}
